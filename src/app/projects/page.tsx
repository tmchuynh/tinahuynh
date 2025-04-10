"use client";

import { ProjectCard } from '@/components/ProjectCard';
import Breadcrumb from '@/components/ui/breadcrumb';
import { RepoData } from '@/data/types';
import { useEffect, useState } from 'react';

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
  },
];

const GitHubRepoInfo = () => {
  const [repoData, setRepoData] = useState<RepoData[] | null>( null );
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState<string | null>( null );

  useEffect( () => {
    const fetchRepoInfo = async () => {
      try {
        const res = await fetch( '/api/github?owner=tmchuynh', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        } );

        const data = await res.json();

        console.log( data );

        if ( !res.ok ) {
          throw new Error( data.error || 'Failed to fetch repository data' );
        }

        // Now fetch languages for each repo
        const reposWithLanguages = await Promise.all( data.map( async ( repo: RepoData ) => {
          if ( !repo.fork ) {
            const languagesRes = await fetch( repo.languages_url );
            const languagesData = await languagesRes.json();
            repo.languages = languagesData;

            console.log( languagesData );
            return repo;
          }
          return repo;
        } ) );

        setRepoData( reposWithLanguages );
      } catch ( err ) {
        setError( err as string );
      } finally {
        setLoading( false );
      }
    };

    fetchRepoInfo();
  }, [] );

  if ( loading ) return <p>Loading...</p>;
  if ( error ) return <p>Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-center mb-8">Repository Info</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
        {repoData && repoData.length > 0 ? (
          repoData.map( ( repo, index ) => (
            !repo.fork ? (
              <ProjectCard repo={repo} key={index} />
            ) : null
          ) )
        ) : (
          <p>No repositories found</p>
        )}
      </div>
    </div>
  );
};

export default GitHubRepoInfo;

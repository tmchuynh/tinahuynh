"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { shortcuts } from "@/data/data";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";
import { FaWindows } from "react-icons/fa6";

export function ShortcutDialog() {
  const [open, setOpen] = useState( false );
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect( () => {
    const handleKeydown = ( e: KeyboardEvent ) => {
      if ( e.metaKey && e.key === "/" ) {
        setOpen( true );
      }
    };

    window.addEventListener( "keydown", handleKeydown );

    return () => document.removeEventListener( "keydown", handleKeydown );
  }, [] );

  return (
    <>
      <p className="font-mono flex items-center gap-2 px-7 justify-end text-foreground my-2">
        Keyboard Shortcuts:
        <kbd className="pointer-events-none inline-flex h-full select-none items-center gap-1 rounded bg-highlight px-1.5 py-1 font-mono text-[14px] font-medium text-highlight-foreground opacity-100 align-text-bottom">
          <span><FaWindows aria-hidden="true" /></span>/
        </kbd>
        <span className="sr-only">Show keyboard shortcuts</span>
      </p>

      <Dialog open={open} onOpenChange={setOpen} aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogContent>
          <DialogTitle id="dialog-title">Keyboard Shortcuts</DialogTitle>
          <DialogDescription id="dialog-description">
            Use the following keyboard shortcuts for quick actions:
          </DialogDescription>
          <div className="flex flex-col gap-2 mt-4">
            {shortcuts.map( ( shortcut, index ) => (
              <div key={index} className="grid grid-cols-7 gap-6">
                <div className="font-mono col-span-3 text-right">{shortcut.shortcut}</div>
                <div className="text-left col-span-4">{shortcut.description}</div>
              </div>
            ) )}
          </div>
          <DialogClose asChild>
            <Button variant={isDarkMode ? "secondary" : "default"} className="mt-4 w-full shadow-lg dark:shadow-border" aria-label="Close keyboard shortcuts dialog">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}

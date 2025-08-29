'use client'

import { useAptabase } from "@aptabase/react";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type LinkTrackParamsType =LinkProps<unknown>  & { 
   children: ReactNode,
   href: string,
   eventName: string,
   className?: string
}

export const LinkTrack = ({ children, href, eventName, ...props }: LinkTrackParamsType) => {
   const { trackEvent } = useAptabase();
   const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
       trackEvent(eventName, { path: href });
       if(props.onClick){
          props.onClick(e)
       }
   }
   return (
      <Link {...{ href, ...props, onClick}}>
         {children}
      </Link>
   )
}
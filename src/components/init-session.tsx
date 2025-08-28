'use client'

import { useAptabase } from "@aptabase/react"
import { useEffect } from "react"

export const InitPageSession = ({ page }: { page: string }) => {
    const { trackEvent } = useAptabase();

    useEffect(() => {
        trackEvent('load-page', { page })
    },[])

    return <></>
}
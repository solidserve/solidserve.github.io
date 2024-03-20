'use client'
import { Progress } from "@/components/ui/progress"
import React from 'react'
export default function ProgressCard() {
    const [progress, setProgress] = React.useState(13)
    const [performance, setPerformance] = React.useState(13)
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    React.useEffect(() => {
        const timer = setTimeout(() => setPerformance(90), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className='border-2 p-10 w-[300px]'>
                <h2 className='font-mono text-md'>Attendance</h2>
                <Progress value={progress} className=""/>
            </div>
            <div className='border-2 p-10 w-[300px]'>
                <h2 className='font-mono text-md'>Performance</h2>
                <Progress value={performance} className=""/>
            </div>

        </>

    );
}
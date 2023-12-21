import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { ReactNode } from 'react';

export function Root({ children }: { children: ReactNode }) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>{children}</Tooltip>
        </TooltipProvider>
    );
}

export function Trigger({ children }: { children: ReactNode }) {
    return <TooltipTrigger asChild>{children}</TooltipTrigger>;
}

export function Content({ children }: { children: ReactNode }) {
    return <TooltipContent>{children}</TooltipContent>;
}

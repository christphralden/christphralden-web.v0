

import { animatePageOut } from '@lib/animations/transition-link';
import { type ReactNode } from 'react';

interface TransitionLinkProps {
	disabled?: boolean,
	className?: String,
	to: string,
	children: ReactNode
};


export default function TransitionLink({disabled, className, to, children}:TransitionLinkProps) {
	return (
		<button onClick={()=>{animatePageOut(to)}} disabled={disabled} className={`${className}`}>
			{children}
		</button>
	)
}
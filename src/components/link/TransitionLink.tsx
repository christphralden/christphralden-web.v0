

import { animatePageOut } from '@lib/animations/transition-link';
import { type ReactNode } from 'react';

interface TransitionLinkProps {
	disabled?: boolean,
	className?: String,
	to: string,
	id?:string,
	children: ReactNode
};


export default function TransitionLink({disabled, className, to, children, id}:TransitionLinkProps) {
	return (
		<button id={id} onClick={()=>{animatePageOut(to)}} disabled={disabled} className={`${className}`}>
			{children}
		</button>
	)
}
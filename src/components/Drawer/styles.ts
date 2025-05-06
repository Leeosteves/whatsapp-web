// styles.ts
export const wrapperClass = 'absolute flex flex-row w-screen h-dvh';

export const containerClass = (isOpen: boolean) =>
    `h-auto ${isOpen ? 'w-58' : 'w-12'} flex flex-col items-start bg-secondary `;

export const sectionButtons = (isOpen: boolean) => `
w-auto items-start flex flex-col justify-between h-dvh relative
`

export const buttonContainer = (isOpen: boolean) => `
relative ${isOpen ? 'w-auto': 'w-12'} h-12 p-1 flex items-center justify-center
`

export const buttonClass = (isOpen: boolean, fixed?:boolean) =>
    `rounded-md ${fixed ? 'w-10': 'w-54'} h-10 flex items-center hover:bg-background`;

export const activeButton  = 'bg-background text-primary'

export const activeSpan = "absolute left-1 h-4 w-0.5 rounded-full bg-primary"

export const IconClass = `text-text absolute left-0 ml-3.5`

export const TextButton = 'pl-12 text-text text-sm w-full h-10 flex items-center'

export const backdropButtonClass = 'w-full h-auto flex';
  
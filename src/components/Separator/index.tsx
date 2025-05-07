interface SeparatorProps {
  w?: number;
  h?: number;
  divider?: string;
}

export default function Separator({ h, w,divider }: SeparatorProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <div
      className="shrink-0"
      style={{
        width: w ? `${w}px` : undefined,
        height: h ? `${h}px` : undefined,
      }}
    />
    {divider && <div className={divider}/>}
    </div>
  );
}
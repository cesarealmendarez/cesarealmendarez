export default function Index() {
  return(
    <div className=" bg-black text-white grid place-items-center font-mono text-[11px] tracking-[0.04em] uppercase">
      <div className="text-center leading-relaxed">
          <div>Cesar Almendarez</div>
          <div className="mt-1 opacity-75">Los Angeles, CA</div>
          <span aria-hidden="true" className="mt-2 inline-block h-[1em] w-[0.6em] animate-blink bg-neutral-600 align-[-0.15em]"/>
      </div>

        <style>{`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }

          .animate-blink {
            animation: blink 1.4s steps(1, end) infinite;
          }
        `}</style>
    </div>
  );
}
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-20">
      <div className="relative h-[38vh] min-h-[240px] w-full md:h-[42vh]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nexora-black via-nexora-black/75 to-nexora-black/40" />
      </div>
      <Container className="relative -mt-24 pb-16 md:-mt-28 md:pb-20">
        <h1 className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 w-full max-w-3xl rounded-lg border border-white/10 border-l-2 border-l-nexora-gold/70 bg-nexora-black/55 px-5 py-4 text-base leading-7 tracking-normal text-white/78 shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-md md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

import Link from "next/link";

import { CityDataType } from "@/types/city";

const CityAreas = ({
  data,
}: {
  data: CityDataType;
}) => {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="font-inter text-3xl font-semibold tracking-tight md:text-4xl">
          Areas We Cover in {data.city}
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {data.areas.map((area) => (
            <Link
              key={area}
              href="#"
              className="rounded-full bg-white/10 px-5 py-2 text-sm shadow-sm backdrop-blur-md transition hover:bg-white/20"
            >
              {area}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityAreas;
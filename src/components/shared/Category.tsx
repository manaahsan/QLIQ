// helper
import { categories } from "@/lib/helper";

export default function CategorySection() {
  return (
    <section className="container mx-auto mt-14">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {categories.map((category) => {
          return (
            <div
              key={category.name}
              className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
            >
              <div
                className={`rounded-xl p-4 transition-all md:w-40`}
                style={{
                  backgroundColor: category.background,
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 object-contain mx-auto"
                />
              </div>
              <h2 className={`text-sm font-medium`}>{category.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

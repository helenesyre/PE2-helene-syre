import Breadcrumb from "@/app/_components/ui/Breadcrumbs";
import Image from "next/image";
import EditProfileForm from "./EditProfileForm";

export default function EditProfile() {
  return (
    <div className="mt-12 mb-24 px-6 md:px-10 lg:px-16 xl:px-40">
      <div className="flex flex-col gap-2 mb-18">
        <Breadcrumb />
        <h1>Edit profile</h1>
        <p className="lead-text text-deep-forest-400">
          Update your picture, banner and bio. Changes will show in the preview.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <article className="flex-4">
          <EditProfileForm />
        </article>
        {/* Profile preview */}
        <aside className="flex-3 mb-0 lg:mb-8">
          <figure className="sticky top-10 self-start">
            <div className="flex flex-col p-6 bg-cloud-white-50 gap-8 rounded-2xl overflow-hidden">
              {/* Banner image */}
              <div className="relative w-full h-40 overflow-hidden transition-all duration-300">
                <Image
                  src="/images/users/banner.jpg"
                  alt="..."
                  fill
                  loading="eager"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-2xl"
                />
              </div>
              {/* User details */}
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6">
                <div className="relative aspect-square w-25 h-24 rounded-full shrink-0 overflow-hidden">
                  <Image
                    src="/images/users/avatar.jpg"
                    alt="..."
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 max-w-xl">
                  <div>
                    <span className="text-base font-semibold bg-lime-100 border border-lime-500 text-fern-600 px-4 py-1 rounded-lg">
                      Manager
                    </span>
                    <h2 className="mt-2 mb-1">Manager</h2>
                    <p>manager@stud.noroff.no</p>
                  </div>
                  <p className="text-deep-forest-400">
                    Ac duis vitae faucibus pellentesque. Pulvinar mollis risus
                    nisl hac orci urna sollicitudin.
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="text-center small-text text-deep-forest-400 mt-4">
              Updates as you edit the form.
            </figcaption>
          </figure>
        </aside>
      </div>
    </div>
  );
}

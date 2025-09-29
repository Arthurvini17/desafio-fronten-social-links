import ContainerLinks from "@/components/ContainersLinks";
import IconUser from "@/components/IconUser";

//props do button para passar os links dos sites
const LinksProps = [
  { title: "GitHub", alt: "Github Profile", href: "https://github.com/Arthurvini17" },
  { title: "Frontend Mentor", alt: "Frontend Mentor Profile", href: "https://frontendmentor.io" },
  { title: "LinkedIn", alt: "LinkedIn Profile", href: "https://www.linkedin.com/in/arthur-vinicius-b22202270/" },
  { title: "Twitter", alt: "Twitter Profile", href: "https://twitter.com" },
  { title: "Instagram", alt: "Instagram Profile", href: "https://www.instagram.com/_vini.404/" },
]

export default function Home() {
  return (
    <div className="bg-black h-screen  flex items-center justify-center">
      <div className="bg-[#1f1f1f] rounded-xl w-full sm:w-screen max-w-md p-10 text-center shadow-lg flex flex-col">
        <div className="flex flex-col items-center gap-2">
          <IconUser />

          <div className="flex flex-col mt-2">
            <h1 className="text-xl font-bold">Arthur Vinicius</h1>
            <p className=" text-xs font-semibold text-[#fdec54]">Jaboatão dos Guararapes - PE</p>
            <p className="mt-3">FullStack Developer and DBA</p>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center mt-10   gap-5">
          {/* //rodando com map para fazer a iteração dos itens */}
          {LinksProps.map((link, index) => (
            <ContainerLinks
              key={index}
              title={link.title}
              href={link.href}
              alt={link.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

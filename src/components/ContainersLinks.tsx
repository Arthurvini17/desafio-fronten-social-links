
type ContainerLinksProps = {
    title: string;
    href: string;
    alt: string;
}

export default function ContainerLinks({ title, href, alt }: ContainerLinksProps) {
    return (
        <div className=" ">
            <a href={href} aria-label={alt}>
                <button className="  cursor-pointer bg-gray-600 rounded-md p-2 w-64 text-white  font-semibold">
                    <p>{title}</p>
                </button>
            </a>
        </div>

    )
}
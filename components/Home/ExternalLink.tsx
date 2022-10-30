type LinkProps = {
    href: string;
    children: React.ReactNode
}
const ExternalLink = ({ href, children }: LinkProps) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline underline-offset-2">
        {children}
    </a>
)

export default ExternalLink
type HeaderProps = {
    icon: React.ReactNode;
    title: string;
}

export const Header = ({ icon, title }: HeaderProps) => {
    return (
        <div>
            <div>{icon}</div>
            <h1>{title}</h1>
        </div>
    )
}
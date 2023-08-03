const EditIcon: React.FC = ({ ...props }) => {
    return (
        <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M1.99902 11.5008V14.0008H4.49902L11.8724 6.62748L9.37236 4.12748L1.99902 11.5008Z" fill="white" />
                <path d="M13.8057 3.75415L12.2457 2.19415C11.9857 1.93415 11.5657 1.93415 11.3057 2.19415L10.0857 3.41415L12.5857 5.91415L13.8057 4.69415C14.0657 4.43415 14.0657 4.01415 13.8057 3.75415Z" fill="white" />
            </svg>
        </>
    );
};

export default EditIcon;
const Button = ({ onClick, variant = 'primary', children }) => {
        const baseStyle = {
                padding: '8px 24px',
                whiteSpace: 'nowrap',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
        };

        const variants = {
                primary: {
                        backgroundColor: '#007bff',
                        color: 'white',
                },
                secondary: {
                        backgroundColor: '#6c757d',
                        color: 'white',
                },
                danger: {
                        backgroundColor: '#dc3545',
                        color: 'white',
                },
                success: {
                        backgroundColor: '#28a745',
                        color: 'white',
                }
        };

        const style = {
                ...baseStyle,
                ...variants[variant],
        };

        return (
                <button onClick={onClick} style={style}>
                        {children}
                </button>
        );
};

export default Button;

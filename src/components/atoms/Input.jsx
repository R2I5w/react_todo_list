const Input = ({ value, onChange, placeholder, type = 'text' }) => {
        const style = {
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                width: '100%',
                boxSizing: 'border-box',
                outline: 'none',
        };

        return (
                <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        style={style}
                />
        );
};

export default Input;

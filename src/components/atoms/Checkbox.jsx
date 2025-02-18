const Checkbox = ({ checked, onChange }) => {
        const style = {
                cursor: 'pointer',
                width: '16px',
                height: '16px',
        };

        return (
                <input
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        style={style}
                />
        );
};

export default Checkbox;

import { memo } from 'react';

const TodoStats = memo(({ total, completed, incomplete }) => {
        const style = {
                backgroundColor: '#e0e0e0',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '20px',
                textAlign: 'center',
        };
        return (
                <div style={style}>
                        <p>全てのタスク：{total} 完了済み：{completed} 未完了：{incomplete}</p>
                </div>
        );
});

TodoStats.displayName = 'TodoStats';

export default TodoStats;

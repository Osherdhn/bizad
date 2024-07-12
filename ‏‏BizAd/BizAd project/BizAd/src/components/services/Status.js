function Status(props) {

    function getBadgeCSS() {
        switch (props.type) {
            case 'active':
                return 'bg-success';
            case 'disabled':
                return 'bg-secondary';
            default:
                return 'bg-muted';
        }
    }

    return (
        <span className={`badge ${getBadgeCSS()}`}>
            {props.type}
        </span>
    );
}

export default Status;
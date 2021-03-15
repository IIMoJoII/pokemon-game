export const GamePage = ({onClickButton}) => {
    const handleClick = () => {
        onClickButton && onClickButton('app');
    }

    return (
        <div>
            This is the game page!
            <button onClick={handleClick}>
                Go To Home Page
            </button>
        </div>
    );
}

export default GamePage;


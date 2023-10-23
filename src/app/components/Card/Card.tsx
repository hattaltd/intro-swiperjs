import classNames from "classnames";

interface iCard {
    className?: string;
}

const Card = ({ className }: iCard) => {
    return (
        <div
            className={classNames(
                `h-[400px] flex flex-col gap-y-5 ${className}`
            )}
        >
            <div className="h-full w-full rounded-md bg-clr-bg-secondary"></div>
            <div className="h-full w-full rounded-md bg-clr-bg-secondary"></div>
        </div>
    );
};
export default Card;

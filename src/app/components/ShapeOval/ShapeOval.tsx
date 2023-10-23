interface iShapeOval {
    className?: string;
}

const ShapeOval = ({ className }: iShapeOval) => {
    return (
        <div
            className={`absolute z-10 bg-clr-bg-primary w-full rounded-[50%] ${className}`}
        ></div>
    );
};
export default ShapeOval;

// HOC

type Props = {
    children: string;
};
export const Warning = ({children}: Props) => {
    return <div className="my-16 flex justify-center items-center flex-col gap-2"></div>;

};
const Content = ({ContentTitle,Description,TStyle, DStyle}) => {
    return (
        <div className="text-center w-2/3 mx-auto my-12">
            <h2 className={`text-BaseTitle font-semibold text-SubTitle ${TStyle}`}>{ContentTitle}</h2>
            <p className={`text-Black60  ${DStyle}`}>{Description}</p>
        </div>
    );
};

export default Content;
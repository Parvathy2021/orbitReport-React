export default function Banner(){
    let pageTitle = "Orbit Report";
    let instruction ="Click on the buttons to see the satellites in that orbit type";
    return (
        <>
        <header><h1> {pageTitle}</h1></header>
        <p>{instruction}</p>
        </>
    );
}
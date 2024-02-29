import { Alert, Row } from "react-bootstrap";
import data from "../../public/data/events.json";
import { Event } from "./Event";
import { useEffect, useState } from "react";
export default function Events() {
    const [showBook, setShowBook] = useState(false);
    const [welcomeAlert, setWelcomeAlert] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setWelcomeAlert(false);
        }, 3000);

        return () => {
            clearTimeout(welcomeAlert);
        };
    }, []);

    const showBookAlert = () => {
        setShowBook(true);
        setTimeout(() => {
            setShowBook(false);
        }, 2000);
    };
    return (
        <>
            {welcomeAlert && (
                <Alert variant="success">Hey welcome to Esprit Events</Alert>
            )}
            {showBook && (
                <Alert variant="success">You have booked an event</Alert>
            )}
            <Row xs={1} md={4} className="g-4">
                {data.map((element, index) => {
                    return (
                        <Event
                            event={element}
                            key={index}
                            showBook={showBookAlert}
                        />
                    );
                })}
            </Row>
        </>
    );
}

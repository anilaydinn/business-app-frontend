import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = (props) => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const { setComment } = props;

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <div className="d-flex mt-2">
        <button
          className="btn btn-success"
          onClick={SpeechRecognition.startListening}
        >
          Start
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            SpeechRecognition.stopListening();
            setComment(transcript);
          }}
        >
          Stop
        </button>
        <button
          className="btn btn-warning text-white"
          onClick={resetTranscript}
        >
          Reset
        </button>
      </div>
      <textarea
        className="mt-3 w-100"
        rows="3"
        defaultValue={transcript}
      ></textarea>
    </div>
  );
};
export default Dictaphone;

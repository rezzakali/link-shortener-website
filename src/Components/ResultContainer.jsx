import axios from "axios";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../App.css";

function ResultContainer({ inputValue }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shortenLink, setShortenLink] = useState("");
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(response.data.result.full_short_link);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">Something went wrong</p>;
  }

  return (
    <div className="result">
      <p>{shortenLink}</p>
      <CopyToClipboard text={inputValue} onCopy={() => setCopied(true)}>
        <button className="btn btn-warning" id={copied ? "copied" : ""}>
          Copy To Clipboard
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default ResultContainer;

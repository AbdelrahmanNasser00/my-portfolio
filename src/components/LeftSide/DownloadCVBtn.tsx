import styled from "styled-components";

const DownloadCVBtn = () => {
  const handleDownload = () => {
    const downloadLink =
      "https://drive.google.com/file/d/1OwXuoRpTv1B9Dvp2K4fdjvSlpVQzz5xs/view?usp=sharing";
    window.open(downloadLink, "_blank", "noopener,noreferrer");
  };
  return (
    <StyledWrapper>
      <button onClick={handleDownload}>
        <span />
        <span />
        <span />
        <span /> Download CV
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 0.6em 0.8em;
    outline: none;
    border: 1px solid #303030;
    color: #4fd1c5;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.875rem;
    overflow: hidden;
    transition: 0.2s;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    box-shadow: 0 0 10px #4fd1c5, 0 0 25px #ae00ff, 0 0 50px #4fd1c5;
    transition-delay: 0.6s;
  }

  button span {
    position: absolute;
  }

  button span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4fd1c5);
  }

  button:hover span:nth-child(1) {
    left: 100%;
    transition: 0.7s;
  }

  button span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ae00ff);
  }

  button:hover span:nth-child(3) {
    right: 100%;
    transition: 0.7s;
    transition-delay: 0.35s;
  }

  button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #4fd1c5);
  }

  button:hover span:nth-child(2) {
    top: 100%;
    transition: 0.7s;
    transition-delay: 0.17s;
  }

  button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #ae00ff);
  }

  button:hover span:nth-child(4) {
    bottom: 100%;
    transition: 0.7s;
    transition-delay: 0.52s;
  }

  button:active {
    background: #4fd1c5;
    background: linear-gradient(to top right, #4fd1c5, #ae00ff);
    color: #bfbfbf;
    box-shadow: 0 0 8px #4fd1c5, 0 0 8px #ae00ff, 0 0 8px #4fd1c5;
    transition: 0.1s;
  }

  button:active
    span:nth-child(1)
    span:nth-child(2)
    span:nth-child(2)
    span:nth-child(2) {
    transition: none;
    transition-delay: none;
  }
`;

export default DownloadCVBtn;

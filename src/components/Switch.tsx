import { useState, MouseEvent } from "react";
import styled from "styled-components";

interface Coordinates {
  x: string;
  y: string;
}

interface ParticleProps {
  angle: number;
}

const Switch: React.FC = () => {
  const [coords, setCoords] = useState<Coordinates>({ x: "50%", y: "50%" });
  const [isChecked, setIsChecked] = useState<boolean>(true); // Set to true for initial dark mode
  const handleMouseMove = (e: MouseEvent<HTMLLabelElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x: `${x}%`, y: `${y}%` });
  };
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const particles: ParticleProps[] = [
    { angle: 30 },
    { angle: 60 },
    { angle: 90 },
    { angle: 120 },
    { angle: 150 },
    { angle: 180 },
  ];

  return (
    <StyledWrapper>
      <label className="cosmic-toggle" onMouseMove={handleMouseMove}>
        <input
          className="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div
          className="slider"
          style={{ "--x": coords.x, "--y": coords.y } as React.CSSProperties}>
          <div className="cosmos" />
          <div className="energy-line" />
          <div className="energy-line" />
          <div className="energy-line" />
          <div className="toggle-orb">
            <div className="inner-orb" />
            <div className="ring" />
          </div>
          <div className="particles">
            {particles.map((particle, index) => (
              <div
                key={index}
                className="particle"
                style={
                  { "--angle": `${particle.angle}deg` } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cosmic-toggle {
    position: relative;
    width: 40px;
    height: 20px;
    transform-style: preserve-3d;
    perspective: 150px;
    display: inline-block;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #1a1a2e, #16213e);
    border-radius: 10px; /* Reduced from 35px */
    transition: 0.5s;
    transform-style: preserve-3d;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5),
      inset 0 0 4px rgba(255, 255, 255, 0.05);
    overflow: hidden;
  }

  .cosmos {
    position: absolute;
    inset: 0;
    background: radial-gradient(0.5px 0.5px at 10% 10%, #fff 100%, transparent),
      radial-gradient(0.5px 0.5px at 30% 30%, #fff 100%, transparent),
      radial-gradient(0.5px 0.5px at 50% 50%, #fff 100%, transparent);
    background-size: 150% 150%;
    opacity: 0.1;
    transition: 0.3s;
  }

  .toggle-orb {
    position: absolute;
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background: linear-gradient(145deg, #ff6b6b, #4ecdc4);
    border-radius: 50%;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-style: preserve-3d;
    z-index: 2;
  }

  .inner-orb {
    position: absolute;
    inset: 2px; /* Reduced from 5px */
    border-radius: 50%;
    background: linear-gradient(145deg, #fff, #e6e6e6);
    transition: 0.5s;
    overflow: hidden;
  }

  .inner-orb::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(0, 0, 0, 0.1) 10deg,
      transparent 20deg
    );
    animation: patternRotate 10s linear infinite;
  }

  .ring {
    position: absolute;
    inset: -1px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: 0.5s;
  }

  .toggle:checked + .slider {
    background: linear-gradient(45deg, #16213e, #1a1a2e);
  }

  .toggle:checked + .slider .toggle-orb {
    transform: translateX(20px) rotate(360deg);
    background: linear-gradient(145deg, #4ecdc4, #45b7af);
  }

  .toggle:checked + .slider .inner-orb {
    background: linear-gradient(145deg, #45b7af, #3da89f);
    transform: scale(0.9);
  }

  .toggle:checked + .slider .ring {
    border-color: rgba(78, 205, 196, 0.3);
    animation: ringPulse 2s infinite;
  }

  .energy-line {
    position: absolute;
    width: 100%;
    height: 0.5px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(78, 205, 196, 0.5),
      transparent
    );
    opacity: 0;
    transition: 0.3s;
  }

  .energy-line:nth-child(1) {
    top: 20%;
    transform: rotate(15deg);
  }
  .energy-line:nth-child(2) {
    top: 50%;
    transform: rotate(0deg);
  }
  .energy-line:nth-child(3) {
    top: 80%;
    transform: rotate(-15deg);
  }

  .toggle:checked + .slider .energy-line {
    opacity: 1;
    animation: energyFlow 2s linear infinite;
  }

  .particles {
    position: absolute;
    inset: 0;
  }

  .particle {
    position: absolute;
    width: 1px;
    height: 1px;
    background: #4ecdc4;
    border-radius: 50%;
    opacity: 0;
    top: 50%;
    left: 50%;
  }

  .toggle:checked + .slider .particle {
    animation: particleBurst 1s ease-out infinite;
  }

  @keyframes ringPulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.6;
    }
  }

  @keyframes patternRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes energyFlow {
    0% {
      transform: scaleX(0) translateX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(1) translateX(50%);
      opacity: 1;
    }
    100% {
      transform: scaleX(0) translateX(100%);
      opacity: 0;
    }
  }

  @keyframes particleBurst {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(
          calc(cos(var(--angle)) * 12px),
          calc(sin(var(--angle)) * 12px)
        )
        scale(0);
      opacity: 0;
    }
  }

  .slider:hover .toggle-orb {
    filter: brightness(1.2);
    box-shadow: 0 0 5px rgba(78, 205, 196, 0.5),
      0 0 10px rgba(78, 205, 196, 0.3);
  }

  .slider:hover .cosmos {
    opacity: 0.2;
    animation: cosmosPan 20s linear infinite;
  }

  @keyframes cosmosPan {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 200%;
    }
  }

  .toggle:active + .slider .toggle-orb {
    transform: scale(0.95);
  }

  .cosmic-toggle:hover .slider {
    transform: rotateX(10deg) rotateY(10deg);
  }

  .toggle:checked + .slider::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--x) var(--y),
      rgba(78, 205, 196, 0.2),
      transparent 50%
    );
    opacity: 0;
    animation: glowFollow 2s linear infinite;
  }

  @keyframes glowFollow {
    0%,
    100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export default Switch;

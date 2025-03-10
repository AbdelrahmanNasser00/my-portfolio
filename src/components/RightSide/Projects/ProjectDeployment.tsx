import styled from "styled-components";
interface deployProps {
  deploymentLink: string;
}
const ProjectDeployment: React.FC<deployProps> = ({ deploymentLink }) => {
  const handleButton = () => {
    window.open(deploymentLink, "_blank");
  };
  return (
    <StyledWrapper>
      <button onClick={handleButton} className="btn-github">
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12.4 24c-.2 0-.4 0-.5-.1-.6-.2-1.1-.7-1.3-1.4l-.6-3.3c-.1-.5-.3-.9-.6-1.2l-3.3-3.3c-.3-.3-.7-.5-1.2-.6l-3.4-.7c-.7-.1-1.2-.6-1.4-1.3-.2-.6 0-1.3.5-1.8l2.6-2.6c.8-.8 1.9-1.4 3.1-1.4h3.1c.8-.9 1.6-1.8 2.4-2.6 5.7-5.7 10.9-3.2 11.1-3.1l.3.2.2.3c.1.2 2.5 5.5-3.1 11.1-.9.9-1.8 1.7-2.6 2.4v3.1c0 1.2-.5 2.2-1.3 3.1l-2.6 2.6c-.4.4-.9.6-1.4.6zm-10.2-12.5 3.1.6c.8.2 1.6.6 2.2 1.2l3.3 3.3c.6.6 1 1.4 1.2 2.2l.6 3.1 2.4-2.4c.4-.4.7-1 .7-1.6v-4l.4-.3c1-.8 1.9-1.7 2.9-2.6 3.9-3.9 3.2-7.4 2.9-8.5-1.1-.4-4.6-1-8.5 2.9-.9.9-1.8 1.9-2.6 2.9l-.3.4h-4c-.6 0-1.2.2-1.6.7zm-.1 12.5c-.8 0-1.3-.1-1.6-.4-.2-.2-.7-.7-.3-3.1.2-1.1.5-2.6 1.3-3.4 1.5-1.5 4-1.5 5.4 0 1.5 1.5 1.5 3.9 0 5.4-1.1 1.2-3.6 1.5-4.8 1.5zm2.2-6c-.5 0-1 .2-1.3.5-.6.6-.9 2.5-.9 3.5 1 0 2.9-.3 3.5-.8.7-.7.7-1.9 0-2.6-.4-.4-.9-.6-1.3-.6z"
            fill="currentcolor"
          />
          <path
            d="m17 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
            fill="currentcolor"
          />
        </svg>

        <span>Deployment</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-github {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    border-radius: 8px;
    font-weight: 600;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: #24292e;
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-left: 8px;
  }

  .btn-github:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.03);
  }

  @media (max-width: 480px) {
    .btn-github {
      padding: 0.5rem;
      font-size: 0.75rem;
    }

    .btn-github span {
      display: none;
    }

    .btn-github svg {
      width: 14px;
      height: 14px;
    }
  }
`;
export default ProjectDeployment;

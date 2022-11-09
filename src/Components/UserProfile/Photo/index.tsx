import { PhotoWrapper } from "./style"

const PhotoContainer: React.FC = () => {
    return (
        <PhotoWrapper>
            <div className="title">
                <span>Passport Size Photo</span>
            </div>
            <div className="info-content">
                <div className="blank-details">
                    Photo Not uploaded.
                </div>
            </div>
        </PhotoWrapper>
    );
};

export default PhotoContainer;
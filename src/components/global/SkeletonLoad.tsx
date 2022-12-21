import React from 'react';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonUsers = () => {
    return (
        <SkeletonTheme baseColor="#434441" highlightColor="#444">
            <p>
                <Skeleton count={3} />
            </p>
        </SkeletonTheme>
    );
};

export default SkeletonUsers;
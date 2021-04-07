export const formatUser = ({
    displayName,
    email,
    photoURL,
    providerId,
    uid,
}) => {
    const userFormatted = {
        name: displayName,
        email,
        photoURL,
        providerId,
        uid,
    };

    return userFormatted;
};

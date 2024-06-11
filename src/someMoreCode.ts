

const additionalInfoAboutUser =async (headers:any): Promise<any> => {
    const user=headers['user'] ?    JSON.parse(headers['user']):null;

    return {



        userId: user ? user.id : null,
        ipAddress: user ? user.signedUpIp : null,
        deviceType: user ? user.deviceType : null,
        email: user ? user.email : null,
        createdAt: user ? user.createdAt : null,
        updatedAt: user ? user.updatedAt : null,
        profile: user ? user.profile : null,
    };
}


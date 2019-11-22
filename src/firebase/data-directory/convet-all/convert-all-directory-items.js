const convertAllDirectoryItemsSnapshotToMap = (directory) => {
    const transformedDirectory = directory.docs.map(doc => {
      const {title, subsections, order, linkUrl, icon, href, hiddenForSignedInUser, hiddenForSignedOutUser} = doc.data();
      return {
        id: doc.id,
        title,
        subsections,
        order,
        linkUrl,
        icon,
        href,
        hiddenForSignedInUser,
        hiddenForSignedOutUser
    }});
    return transformedDirectory;
  }
export default convertAllDirectoryItemsSnapshotToMap;
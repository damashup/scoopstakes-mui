const convertAllDirectoryItemsSnapshotToMap = (directory) => {
    const transformedDirectory = directory.docs.map(doc => {
      const {title, subsections, order, linkUrl, icon, href, forSignedInOnly} = doc.data();
      return {
        id: doc.id,
        title,
        subsections,
        order,
        linkUrl,
        icon,
        href,
        forSignedInOnly
      };
    });
    return transformedDirectory;
  }
export default convertAllDirectoryItemsSnapshotToMap;
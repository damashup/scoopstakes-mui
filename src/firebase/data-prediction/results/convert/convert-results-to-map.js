const convertResultsSnapshotToMap = (results) => {
  const transformedRounds = results.docs.map(doc => {
    const {
          id,
          ...data
          } = doc.data();
    return {
      id: doc.id,
      legacyUid: id,
      ...data 
    };
  });
  return transformedRounds;
}
export default convertResultsSnapshotToMap;


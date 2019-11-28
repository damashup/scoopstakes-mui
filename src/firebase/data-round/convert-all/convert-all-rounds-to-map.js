

const convertAllRoundsSnapshotToMap = (rounds) => {
  const transformedRounds = rounds.docs.map(doc => {
    const {actual_first_goal, 
          deadline_time, 
          first_ko_time, 
          round_no,
          round_permalink,
          round_status,
          sbd_jackpot_amount,
          sbd_rewards_pot,
          results,
          teams,
          uid,
          } = doc.data();
    return {
      id: doc.id,
      uid,
      actual_first_goal,
      deadline_time,
      first_ko_time,
      round_no,
      round_permalink,
      round_status,
      sbd_jackpot_amount,
      sbd_rewards_pot,
      results,
      teams, 
    };
  });
  return transformedRounds;
}
export default convertAllRoundsSnapshotToMap;
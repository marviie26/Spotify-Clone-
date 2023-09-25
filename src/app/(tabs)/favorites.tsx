import { ActivityIndicator, FlatList } from 'react-native';
import TrackListItem from '../../components/TrackListItem';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getFavorites($userId: String!) {
    favoritesByUserid(userid: $userId) {
      id
      trackid
      userid
      track {
        id
        name
        preview_url
        artists {
          id
          name
        }
        album {
          id
          name
          images {
            url
            width
            height
          }
        }
      }
    }
  }
`;

export default function FavoritesScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { userId: 'marviie9' },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    console.log(error);
  }
  console.log(data);
  const tracks = (data?.favoritesByUserid || []).map((fav:any) => fav.track);

  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

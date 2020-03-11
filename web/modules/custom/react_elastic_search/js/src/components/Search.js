import React from "react";
import { ReactiveBase, DataSearch, ReactiveList, ResultCard } from '@appbaseio/reactivesearch';
const { ResultCardsWrapper } = ReactiveList;

class Search extends React.Component {
  render() {
    return (
      <ReactiveBase
        url="http://localhost:9200"
        app="elasticsearch_index_elastic_content_index"
        credentials="pradosh:pradosh"
      >
        <DataSearch
          componentId="mainSearch"
          dataField={["body", "title"]}
          queryFormat="and"
          iconPosition="left"
        />
        <ReactiveList
          react={{
            "and": ["mainSearch"]
          }}
          componentId="SearchResult"
          pagination={true}
          paginationAt="bottom"
          pages={5}
          size={10}
          dataField="title"
        >
          {({ data, error, loading }) => (
            <ResultCardsWrapper>
              {
                data.map(item => (
                  <ResultCard key={item._id}>
                    <ResultCard.Image src={item.url}/>
                    <ResultCard.Title
                      dangerouslySetInnerHTML={{
                        __html: item.title
                      }}
                    />
                  </ResultCard>
                ))
              }
            </ResultCardsWrapper>
          )}
        </ReactiveList>
      </ReactiveBase>
    );
  }
}

export default Search;

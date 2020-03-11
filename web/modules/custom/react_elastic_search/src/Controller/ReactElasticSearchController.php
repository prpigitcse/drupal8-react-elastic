<?php

namespace Drupal\react_elastic_search\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for React Elastic Search routes.
 */
class ReactElasticSearchController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {
    return [
      '#theme' => 'react_elastic_search',
      '#attached' => [
        'library' => 'react_elastic_search/react-elastic-search',
      ],
    ];
  }

}

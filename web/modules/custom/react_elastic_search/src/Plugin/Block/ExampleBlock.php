<?php

namespace Drupal\react_elastic_search\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an example block.
 *
 * @Block(
 *   id = "react_elastic_search_example",
 *   admin_label = @Translation("Example"),
 *   category = @Translation("React Elastic Search")
 * )
 */
class ExampleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build['content'] = [
      '#markup' => $this->t('It works!'),
    ];
    return $build;
  }

}

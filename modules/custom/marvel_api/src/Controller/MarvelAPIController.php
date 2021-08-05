<?php

namespace Drupal\marvel_api\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Output of our JS page.
 */
class MarvelAPIController extends ControllerBase {

  public function jsPage() {

    $build = [];
    $build['content'] = [
      '#markup' => '<div class="container">
                      <div class="row" id="marvel-row">
                  
                      </div>
                    </div>',
    ];
    $build['#attached']['library'][] = 'marvel_api/marvel_comic';
    //$build['#attached']['drupalSettings']['js_example']['title'] = $this->config('system.site')->get('name');

    return $build; 
  }

}

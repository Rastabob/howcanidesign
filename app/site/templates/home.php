<?php
    snippet('header');
    snippet('search');
?>

<div class="wrap-fluid">
    <div class="h1">
        <?= $page->text()->kirbytext() ?>
    </div>

    <hr />

    <?php snippet('listing') ?>
</div>
<?php snippet('footer') ?>

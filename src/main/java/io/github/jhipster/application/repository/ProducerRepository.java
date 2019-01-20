package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Producer;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Producer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProducerRepository extends JpaRepository<Producer, Long> {

}

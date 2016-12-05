package bowlblitz.traits

import org.springframework.beans.factory.annotation.Value

trait BowlBlitzConfig {
    @Value('${ctokensUrl}')
    String ctokensUrl
}
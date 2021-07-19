package br.com.iacit.service.mapper;

import br.com.iacit.domain.*;
import br.com.iacit.service.dto.CompanyDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Company} and its DTO {@link CompanyDTO}.
 */
@Mapper(componentModel = "spring", uses = { CountryMapper.class, StateMapper.class, CityMapper.class })
public interface CompanyMapper extends EntityMapper<CompanyDTO, Company> {
    @Mapping(target = "country", source = "country", qualifiedByName = "id")
    @Mapping(target = "state", source = "state", qualifiedByName = "id")
    @Mapping(target = "city", source = "city", qualifiedByName = "id")
    CompanyDTO toDto(Company s);

    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CompanyDTO toDtoId(Company company);
}
